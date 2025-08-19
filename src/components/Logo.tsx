import { siteConfig } from "@/lib/config";

function Logo() {
  return (
    <div className="p-xs text-content-light bg-surface-primary font-semibold text-2xl rounded-sm">
      {siteConfig.name.toUpperCase()}
    </div>
  );
}

export default Logo;
