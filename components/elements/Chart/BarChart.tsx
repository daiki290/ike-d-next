import {SingleRaderChartData} from "@/types/Chart/index"
import {
    ResponsiveContainer,
    BarChart as BarReChart,
    XAxis,
    YAxis,
    Bar
  } from "recharts";

type PropType = {
    dataList: SingleRaderChartData[]
}

export default function BarChart(props: PropType){
    const dataList = props.dataList



    return(
        <>
            <ResponsiveContainer width="100%" height={300}>
                <BarReChart
                    layout="vertical"
                    data={dataList}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 40,
                        bottom: 5,
                    }}>
                        <XAxis type="number" domain={[0,5]} ticks={[0,1,2,3,4,5]}
                        />
                        <YAxis dataKey="name" type="category" />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarReChart>   
            </ResponsiveContainer>
        </>
    )
}