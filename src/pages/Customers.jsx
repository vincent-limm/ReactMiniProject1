import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Highlighter from 'react-highlight-words';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { httpHelper } from '../helpers/httpHelper';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Space,
  Table,
  Typography,
} from 'antd';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          <Input />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Customers = () => {
  const [customers, setCustomers] = useState(null);
  const { token } = useStateContext();
  const headers = {
    Authorization: token,
  };
  const path = '/customers';
  const api = httpHelper();
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const [form] = Form.useForm();
  const [addForm] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.id === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      address: '',
      country: '',
      phone_number: '',
      job_title: '',
      status: '',
      ...record,
    });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = customers.map((cs) => {
        return cs.id === key ? { ...cs, ...row } : cs;
      });
      setCustomers(newData);
      const index = newData.findIndex((item) => key === item.id);
      console.log({ row, customers, newData, editingKey, index });

      if (index > -1) {
        const item = newData[index];
        updateCustomer(item);
        setEditingKey('');
      } else {
        newData.push(row);
        setCustomers(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const handleDelete = (key) => {
    deleteCustomer(key);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<AiOutlineSearch />}
            size='small'
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size='small'
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type='link'
            size='small'
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <AiOutlineSearch
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '10%',
      ...getColumnSearchProps('name'),
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend', 'ascend'],
      editable: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
      editable: true,
    },
    ,
    {
      title: 'Country',
      dataIndex: 'country',
      ...getColumnSearchProps('country'),
      sorter: (a, b) => a.country.length - b.country.length,
      sortDirections: ['descend', 'ascend'],
      editable: true,
    },
    ,
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      ...getColumnSearchProps('phone_number'),
      sorter: (a, b) => a.phone_number.length - b.phone_number.length,
      sortDirections: ['descend', 'ascend'],
      editable: true,
    },
    ,
    {
      title: 'Country',
      dataIndex: 'country',
      ...getColumnSearchProps('country'),
      sorter: (a, b) => a.country.length - b.country.length,
      sortDirections: ['descend', 'ascend'],
      editable: true,
    },
    ,
    {
      title: 'Job Title',
      dataIndex: 'job_title',
      ...getColumnSearchProps('job_title'),
      sorter: (a, b) => a.job_title.length - b.job_title.length,
      sortDirections: ['descend', 'ascend'],
      editable: true,
    },
    ,
    {
      title: 'Status',
      dataIndex: 'status',
      ...getColumnSearchProps('status'),
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ['descend', 'ascend'],
      editable: true,
    },
    ,
    {
      title: 'Created At',
      dataIndex: 'created_at',
      ...getColumnSearchProps('created_at'),
      sorter: (a, b) => a.created_at.length - b.created_at.length,
      sortDirections: ['descend', 'ascend'],
    },
    ,
    {
      title: 'Updated At',
      dataIndex: 'updated_at',
      ...getColumnSearchProps('updated_at'),
      sorter: (a, b) => a.updated_at.length - b.updated_at.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Edit',
      dataIndex: 'edit',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title='Sure to cancel?' onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
    {
      title: 'Delete',
      dataIndex: 'delete',
      render: (_, record) =>
        customers.length >= 1 ? (
          <Popconfirm
            title='Sure to delete?'
            onConfirm={() => handleDelete(record.id)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  useEffect(() => {
    getCustomers();
  }, []);

  const postCustomer = (customer) => {
    api
      .post(`${path}`, { headers, body: customer })
      .then((res) => getCustomers())
      .catch((err) => console.log(err));
  };

  const updateCustomer = (customer) => {
    api
      .put(`${path}`, { headers, body: customer })
      .then((res) => getCustomers())
      .catch((err) => console.log(err));
  };

  const deleteCustomer = (key) => {
    api
      .del(`${path}`, { headers, body: { id: key } })
      .then((res) => getCustomers())
      .catch((err) => console.log(err));
  };

  const getCustomers = () => {
    api
      .get(`${path}`, { headers })
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onFinish = (values) => {
    postCustomer(values);
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (!customers) return null;

  return (
    <>
      <Form
        name='basic'
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 16,
        }}
        layout={'inline'}
        form={addForm}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Name'
          name='name'
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Address'
          name='address'
          rules={[
            {
              required: true,
              message: 'Please input your address!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Country'
          name='country'
          rules={[
            {
              required: true,
              message: 'Please input your country!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Phone Number'
          name='phone_number'
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Job Title'
          name='job_title'
          rules={[
            {
              required: true,
              message: 'Please input your job title!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Status'
          name='status'
          rules={[
            {
              required: true,
              message: 'Please input your status!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={customers}
          columns={mergedColumns}
          rowClassName='editable-row'
          rowKey={'id'}
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </>
  );
};

export default Customers;
