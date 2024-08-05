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

const sidebarList = [
  {id: 'dashboard', name: 'Dashboard'},
  {id: 'inventory', name: 'Inventory'},
  {id: 'order', name: 'Order'},
  {id: 'returns', name: 'Returns'},
  {id: 'customers', name: 'Customers'},
  {id: 'shipping', name: 'Shipping'},
  {id: 'channel', name: 'Channel'},
  {id: 'integrations', name: 'Integrations'},
  {id: 'calculators', name: 'Calculators'},
  {id: 'reports', name: 'Reports'},
  {id: 'account', name: 'Account'},
]

class MyDashboard extends Component {
  state = {activeMenu: 'dashboard'}

  handleClick = id => {
    this.setState({activeMenu: id})
  }

  render() {
    const {activeMenu} = this.state
    const lineData = [
      {name: '6/30/2024-7/6/2024', Orders: 4, Sales: 1404},
      {name: '7/7/2024-7/13/2024', Orders: 2.0, Sales: 800},
      {name: '7/21/2024-7/27/2024', Orders: 2, Sales: 500},
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
            {sidebarList.map(each => (
              <li
                key={each.id}
                className={
                  activeMenu === each.id
                    ? 'active-siderbar-item'
                    : 'sidebar-list-item'
                }
                onClick={() => this.handleClick(each.id)}
              >
                {each.name}
              </li>
            ))}
          </ul>
        </aside>
        <div>
          <header className="header">
            <h2 className="dashboard-title">Dashboard</h2>
          </header>
          <main className="main-content">
            <div className="bar-chart-container">
              <h2 className="chart-title">Sales vs Orders</h2>
              <hr />
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={lineData}
                  margin={{top: 30, right: 30, left: 20, bottom: 5}}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" tickFormatter={formatYAxis} />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="Orders"
                    stroke="#FFA500"
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="Sales"
                    stroke="#008080"
                  />

                  <Legend
                    layout="horizontal"
                    verticalAlign="top"
                    align="center"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="pie-chart-container">
              <h2 className="chart-title">Portion of Sales</h2>
              <hr />
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
                    {pieData.map(index => (
                      <Cell key={`cell-${index}`} fill={index.color} />
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
