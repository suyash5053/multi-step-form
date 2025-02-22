interface BaseRendererProps {
  title: string;
  description: string;
}

const BaseRenderer = ({ title, description }: BaseRendererProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default BaseRenderer;
