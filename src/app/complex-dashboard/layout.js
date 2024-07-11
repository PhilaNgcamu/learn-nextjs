const DashboardLayout = ({ children, users, revenue, notifications }) => {
  return (
    <>
      <h1>Dashboard</h1>
      {children}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
