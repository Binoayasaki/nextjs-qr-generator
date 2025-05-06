import { FavoritosQR } from "@/components/favorites/favorites";

export default function Favorites() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 mt-5">
      <FavoritosQR />
    </div>
  );
}
