import Link from "next/link";
import React from "react";
import Icon from "./Icon";
import { centerItems } from "@/app/global/styleFunctions";

const IconLink = ({
  url,
  src,
  size,
}: {
  url: string | URL;
  src: string | undefined;
  size: number;
}) => {
  return (
    <Link href={url} style={{ height: "100%", width: "100%", ...centerItems }}>
      <Icon src={src} size={size} />
    </Link>
  );
};

export default IconLink;
