export default function DeleteBtn({
  onDelete,
  qr,
}: {
  onDelete: () => void;
  qr: { id: string };
}) {
  const handleDelete = async () => {
    const res = await fetch(`/api/qrcode/${qr.id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      onDelete();
    } else {
      console.error("Error al borrar QR");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="mt-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mx-auto"
    >
      Borrar
    </button>
  );
}
