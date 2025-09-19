import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ClassesNomes } from "@/types/classes";
import { Classes } from "@/constants/classes";
import { ClasseDescricao } from "@/app/classes/[nome]/components/classeDescricao";
import { Habilidades } from "@/app/classes/[nome]/components/habilidades";
import { FichaState } from "../types/state";
import { Card, CardContent } from "@/components/ui/card";
export const HeaderForm = ({
  formData,
  setFormData,
}: {
  formData: FichaState;
  setFormData: React.Dispatch<React.SetStateAction<FichaState>>;
}) => {
  const [openModal, setOpenModal] = useState(false);

  const updateField = (field: keyof FichaState, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Nome do Personagem */}
      <div className="flex flex-col space-y-4">
        <Label>Nome do Personagem</Label>
        <Input
          value={formData.nomePersonagem}
          onChange={(e) => updateField("nomePersonagem", e.target.value)}
        />
      </div>

      {/* Classe */}
      <div className="flex flex-col space-y-4 w-full">
        <Label>Classe</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
          <Select
            value={formData.classe}
            onValueChange={(value) =>
              updateField("classe", value as ClassesNomes)
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione a classe" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(Classes).map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {formData.classe && (
            <Dialog open={openModal} onOpenChange={setOpenModal}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  Ver detalhes da classe
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl w-full">
                <DialogHeader>
                  <DialogTitle>{formData.classe}</DialogTitle>
                </DialogHeader>
                <div className="mx-auto p-6 space-y-6">
                  <ClasseDescricao
                    classeNome={formData.classe}
                    classe={Classes[formData.classe]}
                  />

                  <Habilidades
                    habilidades={Classes[formData.classe].habilidades}
                  />
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      {/* Nível */}
      <div className="flex flex-col  space-y-4">
        <Label>Nível</Label>
        <Input
          type="number"
          min={1}
          value={formData.nivel}
          onChange={(e) => updateField("nivel", Number(e.target.value))}
        />
      </div>

      {/* Nome do Jogador */}
      <div className="flex flex-col space-y-4">
        <Label>Nome do Jogador</Label>
        <Input
          value={formData.nomeJogador}
          onChange={(e) => updateField("nomeJogador", e.target.value)}
        />
      </div>
    </>
  );
};
