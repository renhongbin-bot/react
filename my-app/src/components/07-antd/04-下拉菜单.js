import React, { useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, Menu, theme, Dropdown, Space, Steps, Carousel, Table, Tag, Button, Tree, Modal } from 'antd'
import { DownOutlined, SmileOutlined } from '@ant-design/icons'

const { Header, Sider, Content } = Layout
const { Column, ColumnGroup } = Table
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}
const onChange = currentSlide => {
  console.log(currentSlide)
}
const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          disabled: true,
          children: [
            {
              title: 'leaf',
              key: '0-0-0-0',
              disableCheckbox: true
            },
            {
              title: 'leaf',
              key: '0-0-0-1'
            }
          ]
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }]
        }
      ]
    }
  ]
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
  }
  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info)
  }
  const items = [
    {
      key: '1',
      label: <span>阿里巴巴</span>,
      danger: true,
      onClick: () => {
        console.log(123)
      }
    },
    {
      key: '2',
      label: <span>蚂蚁</span>,
      icon: <SmileOutlined />
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      ),
      disabled: true
    },
    {
      key: '4',
      danger: true,
      label: 'a danger item'
    }
  ]
  const description = 'This is a description.'
  const [current, setCurrent] = useState(0)
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1'
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2'
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3'
            }
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed)
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 600,
            background: colorBgContainer
          }}
        >
          {/* 下拉菜单 */}
          <Dropdown trigger={['click']} menu={{ items }}>
            <Space>
              Hover me
              <DownOutlined />
            </Space>
          </Dropdown>
          {/* 步骤条 */}
          <Steps
            onChange={e => {
              setCurrent(e)
            }}
            style={{ marginTop: '20px' }}
            current={current}
            items={[
              {
                title: 'Finished',
                description
              },
              {
                title: 'In Progress',
                description,
                subTitle: 'Left 00:00:08'
              },
              {
                title: 'Waiting',
                description
              }
            ]}
          />
          {/* 轮播 */}
          <Carousel autoplay afterChange={onChange}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
          {/* 表格 */}
          <Table dataSource={data}>
            <ColumnGroup title="Name">
              <Column title="First Name" dataIndex="firstName" key="firstName" />
              <Column title="Last Name" dataIndex="lastName" key="lastName" />
            </ColumnGroup>
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
              title="Tags"
              dataIndex="tags"
              key="tags"
              render={tags => (
                <>
                  {tags.map(tag => (
                    <Tag color="blue" key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </>
              )}
            />
            <Column
              title="Action"
              key="action"
              render={(_, record) => (
                <Space size="middle">
                  <Button type="primary" size="small">
                    Invite {record.lastName}
                  </Button>
                  <Button size="small" type="primary" danger>
                    Delete
                  </Button>
                </Space>
              )}
            />
          </Table>
          {/* 树形控件 */}
          <Tree
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={treeData}
          />
          {/* 模态框 */}
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Content>
      </Layout>
    </Layout>
  )
}
export default App
