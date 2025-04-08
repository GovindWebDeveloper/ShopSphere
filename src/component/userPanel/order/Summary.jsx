import { Card, Table } from "antd";
import { useSelector } from "react-redux";

const Summary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const selectedAddress = useSelector((state) => state.address.selectedAddress);

  console.log("Cart Items", cartItems);

  const columns = [
    {
      title: "S.No.",
      dataIndex: "serialNumber",
      key: "serialNumber",
      render: (_, __, index) => index + 1,
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
  ];

  const data = cartItems.map((item) => ({
    key: item.id,
    name: item.title,
    price: `$${item.price.toFixed(2)}`,
    quantity: item.quantity,
    total: `$${(item.price * item.quantity).toFixed(2)}`,
  }));

  return (
    <div
      style={{
        padding: "2em",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "3em",
      }}
    >
      <div style={{ width: "100%" }}>
        <div>
          {/* Address  */}
          <Card>
            {selectedAddress ? (
              <p>
                Deliver to:
                <b>
                  {selectedAddress.name}, {selectedAddress.phone}
                </b>
                , {selectedAddress.address} , {selectedAddress.city},{" "}
                {selectedAddress.stateName}, {selectedAddress.country} -{" "}
                {selectedAddress.pincode}
              </p>
            ) : (
              <p>No address selected</p>
            )}
          </Card>

          <br />

          <Card style={{ marginBottom: "1em" }}>
            <Table columns={columns} dataSource={data} pagination={false} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Summary;
