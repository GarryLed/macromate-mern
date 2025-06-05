
// react props 
// create a type for the props of the Card component
type CardProps = {
    text: string,
    count: number
};

export default function Card({text, count}: CardProps) {
    return (
        <div>
            <span>{text}</span>
            <span className="ml-2 text-gray-500">{count}</span>
        </div>
    )
}