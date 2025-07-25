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
  Button,
  Avatar,
  Stack,
  Menu,
  MenuItem,
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
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
/* ---- page components ---- */
import DashboardContent from "./DashboardContent";
import StudentManagement from "./StudentManagement";
import HTEManagement from "./HTEManagement";
import Chat from "./Chat";
import Report from "./Report";
import Settings from "./Settings";
import NotFound from "../../../components/common/NotFound";
import Profile from "./Profile";
import { Logout } from "@mui/icons-material";

/* ---- styling helpers ---- */
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (p) => p !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? 0 : `-${drawerWidth}px`,
  })
);

const AppBar = styled(MuiAppBar, { shouldForwardProp: (p) => p !== "open" })(
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
  })
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
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  /* absolute URLs so they never “stack” */
  const menu = [
    { label: "Dashboard", icon: <DashboardIcon />, route: "/admin/dashboard" },
    {
      label: "Student",
      icon: <SchoolIcon />,
      route: "/admin/studentmanagement",
    },
    {
      label: "HTE",
      icon: <BusinessIcon />,
      route: "/admin/htemanagement",
    },
    { label: "Chat", icon: <ChatIcon />, route: "/admin/chat" },
    { label: "Report", icon: <AssessmentIcon />, route: "/admin/report" },
    { label: "Settings", icon: <SettingsIcon />, route: "/admin/settings" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* ▸▸ AppBar */}
      <AppBar position="fixed" color="primary" open={isDesktop && drawerOpen}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={openDrawer}
            sx={{ mr: 2, ...(isDesktop && drawerOpen && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>Admin</Typography>

          <Stack direction={"row"} spacing={2} alignItems="center">
            <IconButton color="inherit" onClick={() => navigate("/admin/chat")}>
              <EmailIcon />
            </IconButton>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <div>
              <IconButton size="small" onClick={handleOpenMenu}>
                <Avatar />
              </IconButton>
              <Menu
                open={openMenu}
                onClose={handleCloseMenu}
                anchorEl={anchorEl}
              >
                <MenuItem onClick={() => navigate("/admin/profile")}>
                  <ListItemIcon>
                    <AccountBoxIcon/>
                  </ListItemIcon>
                  <ListItemText> Profile</ListItemText>
                </MenuItem>
                <MenuItem onClick={() => navigate("/")}><ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
                </MenuItem>
              </Menu>
            </div>
          </Stack>
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
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
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
      <Main
        open={isDesktop && drawerOpen}
        sx={{
          marginLeft: isDesktop ? (drawerOpen ? 0 : `-${drawerWidth}px`) : 0,
        }}
      >
        <DrawerHeader />

        {/* nested routes relative to /admin/* */}
        <Routes>
          <Route index element={<DashboardContent />} />
          <Route path="dashboard" element={<DashboardContent />} />
          <Route path="studentmanagement" element={<StudentManagement />} />
          <Route path="htemanagement" element={<HTEManagement />} />
          <Route path="chat" element={<Chat />} />
          <Route path="report" element={<Report />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </Box>
  );
}
