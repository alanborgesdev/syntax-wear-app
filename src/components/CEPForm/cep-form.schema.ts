import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const cepFormSchema = z.object({
    cep: z
        .string({ error: "O CEP é obrigatório" })
        .trim()
        .min(1, "O CEP é obrigatório")
        .regex(/^\d{5}-?\d{3}$/, "Informe um CEP válido"),
});

export type CEPFormData = z.infer<typeof cepFormSchema>;

export const useCEPForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<CEPFormData>({
        resolver: zodResolver(cepFormSchema),
        mode: "onChange",
        defaultValues: {
            cep: "",
        },
    });

    return { register, handleSubmit, errors, isSubmitting };
};
