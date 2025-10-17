import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import PhotoList from "../contexts/photos/components/photo-list";

export default function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        albums={[
          { id: "123", title: "Album 1" },
          { id: "323", title: "Album 2" },
          { id: "513", title: "Album 3" },
        ]}
        className="mb-9"
        loading
      />
      <PhotoList
        photos={[
          {
            id: "123",
            title: "Olá Mundo",
            imageId: "portrait-tower.png",
            albums: [
              { id: "123", title: "Album 1" },
              { id: "323", title: "Album 2" },
              { id: "513", title: "Album 3" },
            ],
          },
          {
            id: "124123",
            title: "Olá Mundo",
            imageId: "portrait-tower.png",
            albums: [
              { id: "123", title: "Album 1" },
              { id: "323", title: "Album 2" },
              { id: "513", title: "Album 3" },
            ],
          },
        ]}
      />
    </Container>
  );
}
