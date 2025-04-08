import React, { useState } from "react";
import {
  Table,
  Tag,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Badge,
} from "antd";
import Stock from "../../../assets/data/dummy_stock.json";
import { MdUpdate } from "react-icons/md";

const LowStockAlert = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [form] = Form.useForm();

  // Filter items with Low Stock or Out of Stock
  const lowStock = Stock.filter(
    (e) =>
      e.status === "Low Stock" || e.stock <= 15 || e.status === "Out of Stock"
  );

  const handleUpdate = (record) => {
    setSelectedRecord(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      console.log("Updated Values:", values);
      setIsModalVisible(false);
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "Sr. No.",
      key: "serialNumber",
      render: (text, record, index) => <strong>{index + 1}</strong>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => <strong>{category}</strong>,
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      render: (name) => <strong>{name}</strong>,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (stock) => <strong>{stock}</strong>,
    },
    {
      title: "Sold",
      dataIndex: "sold",
      key: "sold",
      render: (sold) => <strong>{sold}</strong>,
    },
    {
      title: "Restock Level",
      dataIndex: "restockLevel",
      key: "restockLevel",
      render: (restockLevel) => <strong>{restockLevel}</strong>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "blue";
        if (status === "Low Stock") color = "gold";
        if (status === "In Stock") color = "green";
        if (status === "Out of Stock") color = "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "0.2em" }}>
          <Button
            type="text"
            icon={<MdUpdate />}
            onClick={() => handleUpdate(record)}
          >
            Update
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      {/* Wrap Heading with Badge */}

      <h2 style={{ marginBottom: 20 }}>Low Stock Alerts</h2>

      <div
        style={{
          borderRadius: "10px",
          background: "#fff",
          boxShadow: "0px 0px 10px grey",
          padding: "20px",
        }}
      >
        <Table
          columns={columns}
          dataSource={lowStock}
          pagination={{ pageSize: 10 }}
          rowKey="id"
          scroll={{ x: "max-content" }}
        />
      </div>

      <Modal
        title="Update Stock"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="Save"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Product Name"
            name="productName"
            rules={[
              { required: true, message: "Please enter the product name" },
            ]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Stock"
            name="stock"
            rules={[
              { required: true, message: "Please enter the stock quantity" },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Restock Level"
            name="restockLevel"
            rules={[
              { required: true, message: "Please enter the restock level" },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default LowStockAlert;
