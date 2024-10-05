type Props = {
  children: React.ReactNode;
};

export default function Heading1(props: Props) {
  return <div className="text-white text-5xl">{props.children}</div>;
}
