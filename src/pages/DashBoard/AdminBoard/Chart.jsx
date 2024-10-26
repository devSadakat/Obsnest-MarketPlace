import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';




const data = [
    {
        name: 'Smart',
        uv: 31.47,
        pv: 2400,
        fill: '#8884d8',
    },
    {
        name: 'Kitchen',
        uv: 26.69,
        pv: 4567,
        fill: '#83a6ed',
    },
    {
        name: 'Plastic',
        uv: 15.69,
        pv: 1398,
        fill: '#8dd1e1',
    },
    {
        name: 'Electronic',
        uv: 8.22,
        pv: 9800,
        fill: '#82ca9d',
    },
    {
        name: 'Smart',
        uv: 31.47,
        pv: 2400,
        fill: '#8884d8',
    },
    {
        name: 'Kitchen',
        uv: 26.69,
        pv: 4567,
        fill: '#83a6ed',
    },
    {
        name: 'Plastic',
        uv: 15.69,
        pv: 1398,
        fill: '#8dd1e1',
    },
    {
        name: 'Electronic',
        uv: 8.22,
        pv: 9800,
        fill: '#82ca9d',
    },
    {
        name: 'Smart',
        uv: 31.47,
        pv: 2400,
        fill: '#8884d8',
    },
    {
        name: 'Kitchen',
        uv: 26.69,
        pv: 4567,
        fill: '#83a6ed',
    },
    {
        name: 'Plastic',
        uv: 15.69,
        pv: 1398,
        fill: '#8dd1e1',
    },
    {
        name: 'Electronic',
        uv: 8.22,
        pv: 9800,
        fill: '#82ca9d',
    },

];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};


const Chart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                <RadialBar
                    minAngle={15}
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    clockWise
                    dataKey="uv"
                />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
        </ResponsiveContainer>
    );
};

export default Chart;