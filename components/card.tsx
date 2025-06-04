import { IconType } from 'react-icons';

interface CardProps {
    icon: IconType;
    title: string;
    items: string[];
}

export default function Card({ icon: Icon, title, items }: CardProps) {
    return (
        <div className="border cursor-pointers  border-gray-200 rounded-lg p-6 shadow-sm bg-white transition-all duration-300 hover:shadow-md hover:border-blue-200 hover:scale-[1.02]">
            <div className="flex mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 hover:scale-110">
                    <Icon className="text-2xl text-white" />
                </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 transition-colors duration-300 hover:text-blue-600">
                {title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                    <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 transition-all duration-300 hover:bg-blue-100 hover:text-blue-600"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}