import { Button, Card, Drawer, Empty, Form, Input, message, Radio } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  newAddress,
  deleteAddress,
  editAddress,
  selectAddress as selectAddressAction,
} from "../../../redux/address/addressSlice";
import CustomButton from "../../../component/reusableComponents/CustomButton";

const Address = () => {
  const { addresses } = useSelector((state) => state.address);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectAddress, setSelectAddress] = useState(
    addresses.length > 0 ? 0 : null
  );
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [editingAddress, setEditingAddress] = useState(null);

  const showDrawer = (address = null) => {
    setEditingAddress(address);
    if (address) {
      form.setFieldsValue(address);
    } else {
      form.resetFields();
    }
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setEditingAddress(null);
  };

  const onFinish = (values) => {
    setLoading(true);
    if (editingAddress) {
      dispatch(
        editAddress({ index: editingAddress.index, updatedAddress: values })
      );
      message.info("Address Updated");
    } else {
      dispatch(
        newAddress({
          name: values.name,
          phone: values.phone,
          pincode: values.pincode,
          address: values.address,
          city: values.city,
          stateName: values.stateName,
          country: values.country,
          landmark: values.landmark,
        })
      );
      message.success("Address Added");
    }
    setLoading(false);
    setOpen(false);
    form.resetFields();
  };

  const handleRemoveAddress = (index) => {
    if (index === selectAddress) {
      dispatch(selectAddressAction(null));
      setSelectAddress(null);
    }
    dispatch(deleteAddress(index));
    message.error("Address Deleted");
  };

  const handleEditAddress = (index) => {
    const address = addresses[index];
    showDrawer({ ...address, index });
  };

  const handleSelectAddress = (index) => {
    setSelectAddress(index);
    dispatch(selectAddressAction(index));
  };

  return (
    <div
      style={{
        padding: "2em",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div style={{ width: "100%" }}>
        <div>
          {addresses.length === 0 ? (
            <Empty
              description={
                <p>No addresses available. Please add a new address.</p>
              }
            />
          ) : (
            <Radio.Group
              onChange={(e) => handleSelectAddress(e.target.value)}
              value={selectAddress}
              style={{ width: "100%" }}
            >
              {addresses.map((address, index) => (
                <Card
                  key={index}
                  style={{
                    marginBottom: "1em",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Radio value={index} style={{ marginRight: "1em" }} />

                    <div
                      style={{
                        width: "85%",
                        fontSize: "1.1em",
                        flexWrap: "wrap",
                      }}
                    >
                      <h3>
                        {address.name}, {address.phone}
                      </h3>
                      <p>
                        {address.address}, {address.landmark} {address.city},{" "}
                        {address.stateName}, {address.country}-{address.pincode}
                      </p>
                    </div>

                    <div
                      style={{
                        width: "15%",
                        gap: "5px",
                        fontSize: "1.2em",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "end",
                      }}
                    >
                      <Button
                        type="link"
                        onClick={() => handleEditAddress(index)}
                      >
                        Edit
                      </Button>

                      <Button
                        type="link"
                        danger
                        onClick={() => handleRemoveAddress(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </Radio.Group>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10em",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomButton text={"Add"} onClick={() => showDrawer()} />
          </div>
          <Drawer
            title={editingAddress ? "Edit Address" : "Add Address"}
            onClose={onClose}
            open={open}
          >
            <Form name="registrationForm" onFinish={onFinish} form={form}>
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: "Please input Name" },
                  {
                    pattern: /^[A-Za-z\s'-]{2,50}$/,
                    message: "Please input valid Name",
                  },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "Please input Phone Number" },
                  {
                    pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                    message: "Please input valid phone number",
                  },
                ]}
              >
                <Input placeholder="Phone Number" />
              </Form.Item>

              <Form.Item
                name="pincode"
                rules={[
                  { required: true, message: "Please input your pincode" },
                  {
                    pattern: /^\d{6}$/,
                    message: "Please input valid Pin code",
                  },
                ]}
              >
                <Input placeholder="Pin Code" />
              </Form.Item>

              <Form.Item
                name="address"
                rules={[
                  { required: true, message: "Please input your address" },
                ]}
              >
                <Input.TextArea placeholder="Write your address" />
              </Form.Item>
              <Form.Item
                name="city"
                rules={[
                  { required: true, message: "Please input your city" },
                  {
                    pattern: /^[A-Za-z\s'-]{2,50}$/,
                    message: "Please input valid city name",
                  },
                ]}
              >
                <Input placeholder="City" />
              </Form.Item>
              <Form.Item
                name="stateName"
                rules={[
                  { required: true, message: "Please input your state" },
                  {
                    pattern: /^[A-Za-z\s'-]{2,50}$/,
                    message: "Please input valid State name",
                  },
                ]}
              >
                <Input placeholder="State" />
              </Form.Item>
              <Form.Item
                name="country"
                rules={[
                  { required: true, message: "Please input your country" },
                  {
                    pattern: /^[A-Za-z\s'-]{2,50}$/,
                    message: "Please input valid Country name",
                  },
                ]}
              >
                <Input placeholder="Country" />
              </Form.Item>
              <Form.Item name="landmark">
                <Input placeholder="Landmark(optional)" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    background: "#ffab45",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Save
                </Button>
              </Form.Item>
            </Form>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Address;
