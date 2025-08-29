import { siteConfig } from "@/lib/config";

function Logo() {
  return (
    <div className="p-xs text-content-light bg-surface-primary font-semibold text-2xl rounded-md">
      {siteConfig.name.toUpperCase()}
    </div>
  );
}

export default Logo;
