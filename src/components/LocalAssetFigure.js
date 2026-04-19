import { useEffect, useState } from "react";

export default function LocalAssetFigure({
  src,
  alt,
  title,
  hint,
  variant = "landscape",
}) {
  const [hasError, setHasError] = useState(!src);

  useEffect(() => {
    setHasError(!src);
  }, [src]);

  return (
    <div className={`local-asset local-asset--${variant}`}>
      {hasError ? (
        <div className="local-asset__fallback" role="img" aria-label={`${title} placeholder`}>
          <span className="local-asset__label">{title}</span>
          <p>{hint || "Add a local file to show this image."}</p>
          {src ? <code>{src}</code> : null}
        </div>
      ) : (
        <img
          alt={alt}
          className="local-asset__image"
          onError={() => setHasError(true)}
          src={src}
        />
      )}
    </div>
  );
}
