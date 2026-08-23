import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidCPF } from "../../utils/cpf-validator";

// Valida se a data de nascimento é uma data real e não está no futuro
function isValidBirthDate(value: string): boolean {
    const date = new Date(value);
    if (isNaN(date.getTime())) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date > today) return false;

    // Limite de sanidade: ninguém tem mais de 120 anos
    const minDate = new Date();
    minDate.setFullYear(today.getFullYear() - 120);

    return date >= minDate;
}

export const registerUserFormSchema = z
    .object({
        primeiroNome: z
            .string({ error: "O primeiro nome é obrigatório" })
            .trim()
            .min(1, "O primeiro nome é obrigatório"),

        ultimoNome: z
            .string({ error: "O último nome é obrigatório" })
            .trim()
            .min(1, "O último nome é obrigatório"),

        email: z
            .string({ error: "O email é obrigatório" })
            .trim()
            .min(1, "O email é obrigatório")
            .pipe(z.email("Informe um email válido")),

        cpf: z
            .string({ error: "O CPF é obrigatório" })
            .trim()
            .min(1, "O CPF é obrigatório")
            .refine(isValidCPF, "Informe um CPF válido"),

        dataNascimento: z
            .string({ error: "A data de nascimento é obrigatória" })
            .min(1, "A data de nascimento é obrigatória")
            .refine(isValidBirthDate, "Informe uma data de nascimento válida"),

        senha: z
            .string({ error: "A senha é obrigatória" })
            .min(8, "A senha deve ter no mínimo 8 caracteres"),

        confirmarSenha: z
            .string({ error: "A confirmação de senha é obrigatória" })
            .min(1, "A confirmação de senha é obrigatória"),

        phone: z.string().min(1, "Telefone é obrigatório"),
    })
    // Validação cruzada: senha e confirmarSenha devem ser iguais
    .refine((data) => data.senha === data.confirmarSenha, {
        message: "As senhas não coincidem",
        path: ["confirmarSenha"],
    });

export type RegistroFormData = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm<RegistroFormData>({
        resolver: zodResolver(registerUserFormSchema),
        mode: "onBlur", // valida quando o campo perde o foco
        defaultValues: {
            primeiroNome: "",
            ultimoNome: "",
            email: "",
            cpf: "",
            dataNascimento: "",
            senha: "",
            confirmarSenha: "",
            phone: "",
        },
        criteriaMode: "all",
    });

    return {
        handleSubmit,
        register,
        errors,
        isSubmitting,
        setError,
        reset,
    };
};
