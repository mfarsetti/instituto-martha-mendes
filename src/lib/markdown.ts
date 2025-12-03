// Robust Markdown to HTML converter

export const renderMarkdown = (text: string): string => {
  if (!text) return '';
  
  let html = text;
  
  // First, clean any remaining HTML tags that might have come from Word
  html = html.replace(/<span[^>]*>/gi, '');
  html = html.replace(/<\/\span>/gi, '');
  html = html.replace(/<font[^>]*>/gi, '');
  html = html.replace(/<\/\font>/gi, '');
  html = html.replace(/<o:p[^>]*>[\s\S]*?<\/o:p>/gi, '');
  html = html.replace(/class="[^"]*"/gi, '');
  html = html.replace(/style="[^"]*"/gi, '');
  
  // Process blocks - split by double newlines or single newlines before headers/lists
  const lines = html.split('\n');
  const blocks: string[] = [];
  let currentBlock: string[] = [];
  
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    const isHeader = /^#{1,4}\s/.test(trimmed);
    const isList = trimmed.startsWith('- ');
    const isEmpty = !trimmed;
    
    if (isEmpty && currentBlock.length > 0) {
      blocks.push(currentBlock.join('\n'));
      currentBlock = [];
    } else if (isHeader || isList) {
      if (currentBlock.length > 0) {
        blocks.push(currentBlock.join('\n'));
        currentBlock = [];
      }
      blocks.push(trimmed);
    } else if (trimmed) {
      currentBlock.push(trimmed);
    }
  });
  
  if (currentBlock.length > 0) {
    blocks.push(currentBlock.join('\n'));
  }
  
  // Process each block
  const processedBlocks = blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    
    // Headers
    if (trimmed.startsWith('#### ')) {
      return `<h4 class="text-lg font-bold mt-6 mb-3">${processInline(trimmed.slice(5))}</h4>`;
    }
    if (trimmed.startsWith('### ')) {
      return `<h3 class="text-xl font-bold mt-6 mb-3">${processInline(trimmed.slice(4))}</h3>`;
    }
    if (trimmed.startsWith('## ')) {
      return `<h2 class="text-2xl font-bold mt-8 mb-4">${processInline(trimmed.slice(3))}</h2>`;
    }
    if (trimmed.startsWith('# ')) {
      return `<h1 class="text-3xl font-bold mt-8 mb-4">${processInline(trimmed.slice(2))}</h1>`;
    }
    
    // Lists
    if (trimmed.startsWith('- ')) {
      const items = trimmed.split('\n')
        .filter(line => line.trim())
        .map(item => {
          const content = item.startsWith('- ') ? item.slice(2) : item;
          return `<li class="ml-4">${processInline(content)}</li>`;
        })
        .join('');
      return `<ul class="list-disc list-inside my-4">${items}</ul>`;
    }
    
    // Blockquote
    if (trimmed.startsWith('> ')) {
      return `<blockquote class="border-l-4 border-primary pl-4 italic my-4">${processInline(trimmed.slice(2))}</blockquote>`;
    }
    
    // Regular paragraph
    return `<p class="mb-4 leading-relaxed">${processInline(trimmed)}</p>`;
  });
  
  return processedBlocks.filter(Boolean).join('');
};

// Process inline markdown elements
const processInline = (text: string): string => {
  let result = text;
  
  // Bold: **text** or __text__
  result = result.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold">$1</strong>');
  result = result.replace(/__([^_]+)__/g, '<strong class="font-bold">$1</strong>');
  
  // Italic: *text* or _text_
  result = result.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');
  result = result.replace(/_([^_]+)_/g, '<em class="italic">$1</em>');
  
  // Links: [text](url)
  result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // Line breaks within paragraphs
  result = result.replace(/\n/g, '<br/>');
  
  return result;
};

// Convert HTML (from Word paste) to clean Markdown
export const htmlToMarkdown = (html: string): string => {
  let text = html;
  
  // Remove script and style tags
  text = text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  
  // Remove Word-specific tags and comments
  text = text.replace(/<!--[\s\S]*?-->/g, '');
  text = text.replace(/<o:p[^>]*>[\s\S]*?<\/o:p>/gi, '');
  text = text.replace(/<\/?o:[^>]*>/gi, '');
  text = text.replace(/<\/?w:[^>]*>/gi, '');
  text = text.replace(/<\/?m:[^>]*>/gi, '');
  
  // Headers
  text = text.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, content) => `# ${stripTags(content).trim()}\n\n`);
  text = text.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, content) => `## ${stripTags(content).trim()}\n\n`);
  text = text.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, content) => `### ${stripTags(content).trim()}\n\n`);
  text = text.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, content) => `#### ${stripTags(content).trim()}\n\n`);
  
  // Bold and italic
  text = text.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/(strong|b)>/gi, '**$2**');
  text = text.replace(/<(em|i)[^>]*>([\s\S]*?)<\/(em|i)>/gi, '*$2*');
  text = text.replace(/<u[^>]*>([\s\S]*?)<\/u>/gi, '$1');
  
  // Lists
  text = text.replace(/<ul[^>]*>/gi, '\n');
  text = text.replace(/<\/ul>/gi, '\n');
  text = text.replace(/<ol[^>]*>/gi, '\n');
  text = text.replace(/<\/ol>/gi, '\n');
  text = text.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, content) => `- ${stripTags(content).trim()}\n`);
  
  // Paragraphs and line breaks
  text = text.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, content) => {
    const cleaned = stripTags(content).trim();
    return cleaned ? `${cleaned}\n\n` : '';
  });
  text = text.replace(/<br\s*\/?>/gi, '\n');
  text = text.replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, '$1\n');
  
  // Links
  text = text.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');
  
  // Tables
  text = text.replace(/<table[^>]*>[\s\S]*?<\/table>/gi, '[Tabela removida]\n\n');
  
  // Remove span and other inline tags but keep content
  text = text.replace(/<span[^>]*>([\s\S]*?)<\/span>/gi, '$1');
  text = text.replace(/<font[^>]*>([\s\S]*?)<\/font>/gi, '$1');
  
  // Remove remaining HTML tags
  text = text.replace(/<[^>]+>/g, '');
  
  // Decode HTML entities
  text = decodeHtmlEntities(text);
  
  // Clean up whitespace
  text = text.replace(/[ \t]+/g, ' ');
  text = text.replace(/\n[ \t]+/g, '\n');
  text = text.replace(/[ \t]+\n/g, '\n');
  text = text.replace(/\n{3,}/g, '\n\n');
  text = text.trim();
  
  return text;
};

// Helper to strip HTML tags
const stripTags = (html: string): string => {
  return html.replace(/<[^>]+>/g, '');
};

// Decode common HTML entities
const decodeHtmlEntities = (text: string): string => {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '\"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '\"')
    .replace(/&ldquo;/g, '\"')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&hellip;/g, '...')
    .replace(/&#\d+;/g, '');
};
