import type { ComponentProps } from "react";
import Button from "../../../components/button";
import Text from "../../../components/text";
import type { Album } from "../models/album";
import cx from "classnames";
import Skeleton from "../../../components/skeleton";

interface AlbumsFilterProps extends ComponentProps<"div"> {
  albums: Album[];
  loading?: boolean;
}

export default function AlbumsFilter({
  albums,
  loading,
  className,
  ...props
}: AlbumsFilterProps) {
  return (
    <div
      className={cx("flex items-center gap-3.5 overflow-x-auto", className)}
      {...props}
    >
      <Text variant="heading-small">Álbuns</Text>
      {!loading && (
        <>
          <div className="flex gap-3">
            <Button variant="primary" size="sm" className="cursor-pointer">
              Todos
            </Button>
            {albums.map((album) => (
              <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer"
                key={album.id}
              >
                {album.title}
              </Button>
            ))}
          </div>
        </>
      )}

      {loading &&
        Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            className="w-24 h-7"
            key={`album-button-loading-${index}`}
          />
        ))}
    </div>
  );
}
