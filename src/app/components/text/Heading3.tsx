type Props = {
  children: React.ReactNode;
};

export default function Heading3(props: Props) {
  return (
    <div className="text-purple text-3xl font-radley">{props.children}</div>
  );
}