import { useRef } from "react";
import { FichaState } from "../types/state";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Foto({
  formData,
  setFormData,
}: Readonly<{
  formData: FichaState;
  setFormData: React.Dispatch<React.SetStateAction<FichaState>>;
}>) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFTUpload = (file?: File) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setFormData((prev) => ({ ...prev, fotobase64: base64 }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col space-y-2 items-center">
      <div
        className="relative w-24 h-24 cursor-pointer"
        onClick={() => inputRef.current?.click()}
      >
        {formData.fotobase64 ? (
          <img
            src={formData.fotobase64}
            alt="Foto do Personagem"
            className="w-24 h-24 object-cover rounded-md"
          />
        ) : (
          <Image
            src="/file.svg"
            alt="Placeholder"
            className="w-24 h-24 object-cover rounded-md"
            width={96}
            height={96}
          />
        )}
        {formData.fotobase64 && (
          <Button
            size="sm"
            variant="outline"
            className="absolute top-1 right-1 w-8 h-8"
            onClick={(e) => {
              e.stopPropagation(); // evita disparar o clique da imagem
              setFormData((prev) => ({ ...prev, fotobase64: undefined }));
            }}
          >
            X
          </Button>
        )}
      </div>

      {/* Input escondido */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => e.target.files && handleFTUpload(e.target.files[0])}
      />
    </div>
  );
}
