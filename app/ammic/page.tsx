import { FaBrain } from 'react-icons/fa';
import Card from '@/component/card';

export default function Ammic() {
    return (
        <Card 
            icon={FaBrain}
            title="AI/ML Engineer"
            items={[
                "Python", 
                "TensorFlow", 
                "PyTorch",
            ]}
        />
    );
}