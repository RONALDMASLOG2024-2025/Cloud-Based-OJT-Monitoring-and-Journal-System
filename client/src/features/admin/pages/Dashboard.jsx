// src/features/admin/pages/Dashboard.jsx
import * as React from "react";
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import ChatIcon from "@mui/icons-material/Chat";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

/* ---- page components ---- */
import DashboardContent   from "./DashboardContent";
import StudentManagement  from "./StudentManagement";
import CompanyManagement  from "./CompanyManagement";
import Chat               from "./Chat";
import Report             from "./Report";
import Settings           from "./Settings";

/* ---- styling helpers ---- */
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: p => p !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? 0 : `-${drawerWidth}px`,
  }),
);

const AppBar = styled(MuiAppBar, { shouldForwardProp: p => p !== "open" })(
  ({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }),
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

/* ===================================================================== */
export default function Dashboard() {
  const theme     = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate  = useNavigate();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const openDrawer  = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  /* absolute URLs so they never “stack” */
  const menu = [
    { label: "Dashboard",          icon: <DashboardIcon />, route: "/admin/dashboard" },
    { label: "Student Management", icon: <SchoolIcon />,    route: "/admin/studentmanagement" },
    { label: "Company Management", icon: <BusinessIcon />,  route: "/admin/company" },
    { label: "Chat",               icon: <ChatIcon />,      route: "/admin/chat" },
    { label: "Report",             icon: <AssessmentIcon />,route: "/admin/report" },
    { label: "Settings",           icon: <SettingsIcon />,  route: "/admin/settings" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* ▸▸ AppBar */}
      <AppBar position="fixed" open={isDesktop && drawerOpen}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={openDrawer}
            sx={{ mr: 2, ...(isDesktop && drawerOpen && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Cloud‑OJT Admin
          </Typography>
        </Toolbar>
      </AppBar>

      {/* ▸▸ Drawer */}
      <Drawer
        anchor="left"
        variant={isDesktop ? "persistent" : "temporary"}
        open={drawerOpen}
        onClose={!isDesktop ? closeDrawer : undefined}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
        ModalProps={{ keepMounted: true }}
      >
        <DrawerHeader>
          <IconButton onClick={closeDrawer}>
            {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menu.map(({ label, icon, route }) => (
            <ListItem key={route} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(route);
                  if (!isDesktop) closeDrawer();
                }}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* ▸▸ Main panel */}
      <Main open={isDesktop && drawerOpen}>
        <DrawerHeader />

        {/* nested routes relative to /admin/* */}
        <Routes>
          <Route index            element={<DashboardContent />} />
          <Route path="dashboard" element={<DashboardContent />} />
          <Route path="studentmanagement" element={<StudentManagement />} />
          <Route path="company"   element={<CompanyManagement />} />
          <Route path="chat"      element={<Chat />} />
          <Route path="report"    element={<Report />} />
          <Route path="settings"  element={<Settings />} />
          <Route path="*"         element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Main>
    </Box>
  );
}
