import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';

import photos from '@/public/photos';

export default function Home() {
  return (
    <>
      <h1>Photo Album</h1>
      <p>Här är bilder utan inbördesordning</p>
      <div className="container">
        <MasonryPhotoAlbum
          photos={photos}

        />
      </div>
    </>
  );
}

