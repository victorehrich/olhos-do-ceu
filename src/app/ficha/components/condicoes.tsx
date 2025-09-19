// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Badge } from "@/components/ui/badge";
// import { FichaState } from "../types/state";
// import { AVERSOES, CONDICOES, TRAUMAS, VENENOS } from "@/constants/condicoes";
// import { X, ChevronDown, ChevronUp } from "lucide-react";
// import { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// type SectionKey = "condicoes" | "venenos" | "traumas" | "aversoes";

// const SECTION_DATA: Record<
//   SectionKey,
//   { label: string; source: Record<string, any> }
// > = {
//   condicoes: { label: "Condições", source: CONDICOES },
//   venenos: { label: "Venenos", source: VENENOS },
//   traumas: { label: "Traumas", source: TRAUMAS },
//   aversoes: { label: "Aversões", source: AVERSOES },
// };

// export function CondicoesForm({
//   formData,
//   setFormData,
// }: Readonly<{
//   formData: FichaState;
//   setFormData: React.Dispatch<React.SetStateAction<FichaState>>;
// }>) {
//   const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>(
//     {
//       condicoes: true,
//       venenos: false,
//       traumas: false,
//       aversoes: false,
//     }
//   );

//   const [dialogItem, setDialogItem] = useState<{
//     key: SectionKey;
//     nome: string;
//   } | null>(null);

//   const toggleSection = (key: SectionKey) => {
//     setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   const addItem = (key: SectionKey, value: string) => {
//     if (!value || (formData[key] as string[]).includes(value)) return;
//     setFormData((prev) => ({
//       ...prev,
//       [key]: [...(prev[key] as string[]), value],
//     }));
//   };

//   const removeItem = (key: SectionKey, value: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       [key]: (prev[key] as string[]).filter((v) => v !== value),
//     }));
//   };

//   const renderSection = (key: SectionKey) => {
//     const { label, source } = SECTION_DATA[key];
//     const values = formData[key] as string[];
//     const isOpen = openSections[key];

//     return (
//       <Card key={key} className="border shadow-sm">
//         <CardHeader
//           className="flex flex-row justify-between items-center cursor-pointer"
//           onClick={() => toggleSection(key)}
//         >
//           <CardTitle className="text-lg font-semibold flex items-center gap-2">
//             {label}
//           </CardTitle>
//           {isOpen ? <ChevronUp /> : <ChevronDown />}
//         </CardHeader>

//         {isOpen && (
//           <CardContent className="space-y-4">
//             {/* Select */}
//             <Select onValueChange={(v) => addItem(key, v)}>
//               <SelectTrigger className="w-64">
//                 <SelectValue placeholder={`Selecione ${label.toLowerCase()}`} />
//               </SelectTrigger>
//               <SelectContent>
//                 {Object.values(source).map((item: any) => (
//                   <SelectItem key={item.nome} value={item.nome}>
//                     {item.nome}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             {/* Lista de badges */}
//             <div className="flex flex-wrap gap-2 mt-2">
//               {values.map((nome) => (
//                 <Badge
//                   key={nome}
//                   variant="secondary"
//                   className="flex items-center gap-2 px-3 py-1 cursor-pointer"
//                 >
//                   <span
//                     onClick={() => setDialogItem({ key, nome })}
//                     className="flex-1"
//                   >
//                     {nome}
//                   </span>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       removeItem(key, nome);
//                     }}
//                   >
//                     <X className="h-3 w-3" />
//                   </button>

//                   {/* Dialog controlado */}
//                   {dialogItem?.nome === nome && dialogItem?.key === key && (
//                     <Dialog open onOpenChange={() => setDialogItem(null)}>
//                       <DialogContent className="sm:max-w-lg w-full">
//                         <DialogHeader>
//                           <DialogTitle>{nome}</DialogTitle>
//                         </DialogHeader>
//                         <div className="space-y-2 mt-2">
//                           {SECTION_DATA[key].source[nome]?.descricao && (
//                             <p>{SECTION_DATA[key].source[nome].descricao}</p>
//                           )}
//                           {SECTION_DATA[key].source[nome]?.efeito && (
//                             <p className="text-sm text-muted-foreground">
//                               {SECTION_DATA[key].source[nome].efeito}
//                             </p>
//                           )}
//                         </div>
//                       </DialogContent>
//                     </Dialog>
//                   )}
//                 </Badge>
//               ))}
//             </div>
//           </CardContent>
//         )}
//       </Card>
//     );
//   };

//   return (
//     <div className="space-y-4">
//       {(["condicoes", "venenos", "traumas", "aversoes"] as SectionKey[]).map(
//         (key) => renderSection(key)
//       )}
//     </div>
//   );
// }

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useState } from "react";

import { FichaState } from "../types/state";
import { AVERSOES, CONDICOES, TRAUMAS, VENENOS } from "@/constants/condicoes";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type SectionKey = "condicoes" | "venenos" | "traumas" | "aversoes";

const SECTION_DATA: Record<
  SectionKey,
  { label: string; source: Record<string, any> }
> = {
  condicoes: {
    label: "Condições",
    source: CONDICOES.reduce((acc, c) => ({ ...acc, [c.nome]: c }), {}),
  },
  venenos: {
    label: "Venenos",
    source: VENENOS.reduce((acc, v) => ({ ...acc, [v.nome]: v }), {}),
  },
  traumas: {
    label: "Traumas",
    source: TRAUMAS.reduce((acc, t) => ({ ...acc, [t.nome]: t }), {}),
  },
  aversoes: {
    label: "Aversões",
    source: AVERSOES.reduce((acc, a) => ({ ...acc, [a.nome]: a }), {}),
  },
};

export function CondicoesForm({
  formData,
  setFormData,
}: Readonly<{
  formData: FichaState;
  setFormData: React.Dispatch<React.SetStateAction<FichaState>>;
}>) {
  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>(
    {
      condicoes: true,
      venenos: false,
      traumas: false,
      aversoes: false,
    }
  );

  const [dialogItem, setDialogItem] = useState<{
    key: SectionKey;
    nome: string;
  } | null>(null);

  const toggleSection = (key: SectionKey) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const addItem = (key: SectionKey, value: string) => {
    if (!value || (formData[key] as string[]).includes(value)) return;
    setFormData((prev) => ({
      ...prev,
      [key]: [...(prev[key] as string[]), value],
    }));
  };

  const removeItem = (key: SectionKey, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: (prev[key] as string[]).filter((v) => v !== value),
    }));
  };

  const renderSection = (key: SectionKey) => {
    const { label, source } = SECTION_DATA[key];
    const values = formData[key] as string[];
    const isOpen = openSections[key];

    return (
      <Card key={key} className="border shadow-sm">
        <CardHeader
          className="flex flex-row justify-between items-center cursor-pointer"
          onClick={() => toggleSection(key)}
        >
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            {label}
          </CardTitle>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </CardHeader>

        {isOpen && (
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Select onValueChange={(v) => addItem(key, v)}>
                <SelectTrigger className="w-64">
                  <SelectValue
                    placeholder={`Selecione ${label.toLowerCase()}`}
                  />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(source).map((item: any) => (
                    <SelectItem key={item.nome} value={item.nome}>
                      {item.nome}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-wrap gap-2">
              {values.map((nome) => (
                <Badge
                  key={nome}
                  variant="secondary"
                  className="flex items-center gap-2 px-3 py-1 cursor-pointer"
                >
                  <span
                    onClick={() => setDialogItem({ key, nome })}
                    className="flex-1"
                  >
                    {nome}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeItem(key, nome);
                    }}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    );
  };

  return (
    <div className="space-y-4">
      {(["condicoes", "venenos", "traumas", "aversoes"] as SectionKey[]).map(
        (key) => renderSection(key)
      )}

      {/* Dialog para detalhes */}
      {dialogItem && (
        <Dialog open onOpenChange={() => setDialogItem(null)}>
          <DialogContent className="sm:max-w-lg w-full">
            <DialogHeader>
              <DialogTitle>{dialogItem.nome}</DialogTitle>
            </DialogHeader>
            <div className="space-y-2 mt-2">
              {SECTION_DATA[dialogItem.key].source[dialogItem.nome]
                ?.descricao && (
                <p>
                  {
                    SECTION_DATA[dialogItem.key].source[dialogItem.nome]
                      .descricao
                  }
                </p>
              )}
              {SECTION_DATA[dialogItem.key].source[dialogItem.nome]?.efeito && (
                <p className="text-sm text-muted-foreground">
                  {SECTION_DATA[dialogItem.key].source[dialogItem.nome].efeito}
                </p>
              )}
              {SECTION_DATA[dialogItem.key].source[dialogItem.nome]?.dt && (
                <p>
                  <strong>DT:</strong>{" "}
                  {SECTION_DATA[dialogItem.key].source[dialogItem.nome].dt}
                </p>
              )}
              {SECTION_DATA[dialogItem.key].source[dialogItem.nome]
                ?.acumuloMaximo && (
                <p>
                  <strong>Acúmulo Máximo:</strong>{" "}
                  {
                    SECTION_DATA[dialogItem.key].source[dialogItem.nome]
                      .acumuloMaximo
                  }
                </p>
              )}
              {SECTION_DATA[dialogItem.key].source[dialogItem.nome]
                ?.danoPorRodada && (
                <p>
                  <strong>Dano por Rodada:</strong>{" "}
                  {
                    SECTION_DATA[dialogItem.key].source[dialogItem.nome]
                      .danoPorRodada
                  }
                </p>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
