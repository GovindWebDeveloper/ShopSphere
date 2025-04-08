import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import { saveAs } from "file-saver";
import Link from "antd/es/typography/Link";

const UserDataTable = () => {
  const [userData, setUserData] = useState([]);

  // Fetch user data from the correct path
  useEffect(() => {
    fetch("/src/assets/data/dummy_users.json") // Corrected fetch path
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error Loading JSON:", error));
  }, []);

  // Remove user by key
  const handleRemove = (key) => {
    setUserData(userData.filter((user) => user.key !== key));
  };

  // Export user data to CSV
  const handleExportToCSV = () => {
    // Convert user data to CSV format
    const headers = Object.keys(userData[0] || {}).filter(
      (key) => key !== "key"
    ); // Exclude the 'key' field
    const csvRows = [
      headers.join(","), // Add headers as the first row
      ...userData.map((user) =>
        headers.map((header) => `"${user[header] || ""}"`).join(",")
      ),
    ];

    // Create a Blob with CSV content
    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    // Trigger file download
    saveAs(blob, "user_data.csv");
  };

  // Define table columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <>
          <Link style={{ marginRight: 10, color: "blue" }}>Edit</Link>
          <Link
            style={{ color: "red" }}
            onClick={() => handleRemove(record.key)}
          >
            Remove
          </Link>
        </>
      ),
    },
  ];

  return (
    <>
      <div style={{ marginBottom: "2em" }}>
        <h1>All Category</h1>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1em",
          }}
        >
          <h2>Order Sales Data</h2>
          <Button
            type="primary"
            icon={<ExportOutlined />}
            onClick={handleExportToCSV} // Updated to use the CSV export function
          >
            Export All User Details
          </Button>
        </div>
        <div>
          <Table
            bordered={true}
            columns={columns}
            dataSource={userData.map((user, index) => ({
              ...user,
              key: user.id || index, // Use a unique identifier if available
            }))}
            pagination={{ pageSize: 10 }}
            style={{
              borderRadius: "10px",
              boxShadow: "1px 1px 10px grey",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default UserDataTable;
