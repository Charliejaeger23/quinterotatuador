import { projectHref } from "@/lib/config";
export default function ProjectLink({
  className = "",
  children = "Solicitar proyecto",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      className={"button " + className}
      href={projectHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span aria-hidden="true">↗</span>
      <span className="sr-only"> por WhatsApp (abre otra pestaña)</span>
    </a>
  );
}
