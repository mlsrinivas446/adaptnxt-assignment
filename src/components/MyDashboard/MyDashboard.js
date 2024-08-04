import React, {Component} from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts'
import './MyDashboard.css'

class MyDashboard extends Component {
  render() {
    const lineData = [
      {name: '6/30/2024-7/6/2024', Orders: 4, Sales: 1404},
      {name: '7/7/2024-7/13/2024', Orders: 2.0, Sales: 1000},
      {name: '7/21/2024-7/27/2024', Orders: 2, Sales: 800},
    ]

    const pieData = [
      {name: 'WooCommerce Store', value: 55.8, color: '#FF6384'},
      {name: 'Shopify Store', value: 42.2, color: '#36A2EB'},
    ]

    const formatYAxis = value => {
      return `${(value / 1000).toFixed(1)}k` // Convert to k format
    }

    return (
      <div className="dashboard-container">
        <aside className="sidebar">
          <ul className="menu">
            <li>Dashboard</li>
            <li>Inventory</li>
            <li>Order</li>
            <li>Returns</li>
            <li>Customers</li>
            <li>Shipping</li>
            <li>Channel</li>
            <li>Integrations</li>
            <li>Calculators</li>
            <li>Reports</li>
            <li>Account</li>
          </ul>
        </aside>
        <div>
          <header className="header">
            <h2>Dashboard</h2>
          </header>
          <main className="main-content">
            <div className="bar-chart-container">
              <h2>Sales vs Orders</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={lineData}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}
                >
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" tickFormatter={formatYAxis} />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />

                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="Sales"
                    stroke="#008080"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="Orders"
                    stroke="#FFA500"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="pie-chart-container">
              <h2>Portion of Sales</h2>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    cx="50%"
                    cy="50%"
                    data={pieData}
                    startAngle={90}
                    endAngle={-360}
                    innerRadius="0%"
                    outerRadius="80%"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend
                    iconType="circle"
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default MyDashboard
