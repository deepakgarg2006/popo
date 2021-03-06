var echartsOptions1 = {
    color: ["#108ee9","#7ec2f3","#3dbd7d","#ffce3d","#76cdd3"],

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        x: 'left',
        data: ['A', 'B', 'C', 'D', 'E'],
        textStyle: {
            color: "#fff",
        }
    },
    series: [
        {
            name: 'Source',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335, name: 'A' },
                { value: 310, name: 'B' },
                { value: 234, name: 'C' },
                { value: 135, name: 'D' },
                { value: 1548, name: 'E' }
            ]
        }
    ]
};
