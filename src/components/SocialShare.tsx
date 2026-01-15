import { Facebook, Twitter, Linkedin, Share2, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getShareUrl } from "@/lib/social-config";
import { toast } from "sonner";

interface SocialShareProps {
  title: string;
  url?: string;
  text?: string;
  className?: string;
  showLabel?: boolean;
}

const SocialShare = ({ 
  title, 
  url, 
  text,
  className = "",
  showLabel = false
}: SocialShareProps) => {
  const shareUrl = url || window.location.href;

  const handleShare = (platform: string) => {
    const shareLink = getShareUrl(platform as any, { title, url: shareUrl, text });
    window.open(shareLink, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success("Link copiado para a área de transferência!");
    } catch (err) {
      toast.error("Erro ao copiar link");
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: text || title,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or error occurred
      }
    }
  };

  const socialButtons = [
    {
      platform: "facebook",
      icon: Facebook,
      label: "Facebook",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      platform: "twitter",
      icon: Twitter,
      label: "Twitter",
      color: "hover:bg-sky-500 hover:text-white",
    },
    {
      platform: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:bg-blue-700 hover:text-white",
    },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showLabel && (
        <span className="text-sm text-muted-foreground font-medium">Compartilhar:</span>
      )}
      
      {/* Social Buttons */}
      <div className="flex items-center gap-2">
        {socialButtons.map((social) => {
          const Icon = social.icon;
          return (
            <Button
              key={social.platform}
              variant="outline"
              size="icon"
              onClick={() => handleShare(social.platform)}
              className={`transition-colors ${social.color}`}
              title={`Compartilhar no ${social.label}`}
            >
              <Icon className="w-4 h-4" />
            </Button>
          );
        })}

        {/* Copy Link Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={handleCopyLink}
          className="hover:bg-muted"
          title="Copiar link"
        >
          <LinkIcon className="w-4 h-4" />
        </Button>

        {/* Native Share (Mobile) */}
        {navigator.share && (
          <Button
            variant="outline"
            size="icon"
            onClick={handleNativeShare}
            className="hover:bg-muted"
            title="Compartilhar"
          >
            <Share2 className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SocialShare;
