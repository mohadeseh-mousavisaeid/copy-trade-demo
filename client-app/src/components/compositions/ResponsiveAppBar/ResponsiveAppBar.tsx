import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { clearUser } from "store/slices/userSlice";
import { Dispatch, RootState } from "store/store";
import { useNavigate } from "react-router-dom";
import { Avatar, Divider, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { FaRegUser as UserIcon } from "react-icons/fa6";
import { FaRegBell as NofitIcon } from "react-icons/fa";
import { BiWallet as WalletIcon } from "react-icons/bi";

const pages = [
  { name: "Copy Trading", url: "/" },
  { name: "Market", url: "/market" },
];
const notifications = [
  { name: "Promotion", url: "/panel/notification/promotion" },
];
const settings = [
  { name: "Account", url: "/panel/account/security" },
  { name: "Logout", url: "/logout" },
];
const assets = [
  { name: "Assets", url: "/panel/assets" },
  { name: "Preferences", url: "/panel/assets/pref" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [anchorElNotif, setAnchorElNotif] = React.useState<null | HTMLElement>(
    null
  );

  const [anchorElAssets, setAnchorElAssets] =
    React.useState<null | HTMLElement>(null);

  const [openModal, setOpenModal] = React.useState(false);

  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  const dispatch: Dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenNotif = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotif(event.currentTarget);
  };

  const handleOpenAssets = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAssets(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNotif = () => {
    setAnchorElNotif(null);
  };

  const handleCloseAssets = () => {
    setAnchorElAssets(null);
  };

  const handleClickSettingItem = (url: string) => {
    setAnchorElUser(null);
    url === "/logout" ? setOpenModal(true) : navigate(url);
  };

  const handleClickNotifItem = (url: string) => {
    setAnchorElNotif(null);
    navigate(url);
  };

  const handleClickAssetsItem = (url: string) => {
    setAnchorElAssets(null);
    navigate(url);
  };

  const handleOnPageItem = (url: string) => {
    setAnchorElNav(null);
    navigate(url);
  };

  const handleLogout = () => {
    dispatch(clearUser());
    setOpenModal(false);
  };

  React.useEffect(() => {}, []);

  return (
    <AppBar
      sx={{
        boxShadow: 0,
        borderBottom: "1px solid #eee",
        maxHeight: "4rem",
        backgroundColor: "primary.100",
        top: 0,
        zIndex: 1000,
      }}
      position="fixed"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* xs: none */}

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TRADER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => handleOnPageItem(page.url)}
                sx={{ my: 1, color: "text.primary", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* xs: none */}

          {/* xs: flex */}

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  sx={{ minWidth: "150px" }}
                  key={index}
                  onClick={() => handleOnPageItem(page.url)}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none", fontSize: "1.5rem" },
              marginInlineEnd: "auto",
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TRADER
            </Typography>
          </Box>

          {/* xs: flex */}

          {/* Setting ---------------------------------------------------------------*/}

          {/* xs: flex */}

          {isAuth ? (
            <Box sx={{ display: "flex" }}>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open assets">
                  <IconButton onClick={handleOpenAssets} sx={{ px: 1 }}>
                    <WalletIcon size={20} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "3rem" }}
                  id="assets-menu"
                  anchorEl={anchorElAssets}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElAssets)}
                  onClose={handleCloseAssets}
                >
                  {assets.map((assetItem, index) => (
                    <MenuItem
                      key={index}
                      sx={{ minWidth: "150px" }}
                      onClick={() => handleClickAssetsItem(assetItem.url)}
                    >
                      <Typography textAlign="center">
                        {assetItem.name}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box sx={{ flexGrow: 0, mx: "1rem" }}>
                <Tooltip title="Open notification">
                  <IconButton onClick={handleOpenNotif} sx={{ px: 1 }}>
                    <NofitIcon size={20} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "3rem" }}
                  id="notification-menu"
                  anchorEl={anchorElNotif}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNotif)}
                  onClose={handleCloseNotif}
                >
                  {notifications.map((notif, index) => (
                    <MenuItem
                      key={index}
                      sx={{ minWidth: "150px" }}
                      onClick={() => handleClickNotifItem(notif.url)}
                    >
                      <Typography textAlign="center">{notif.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    // onMouseOver={handleOpenUserMenu}
                    sx={{ px: 1 }}
                  >
                    <UserIcon size={20} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "3rem" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  // keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      sx={{
                        m: "0.5rem",
                        mb: "1rem",
                        width: "2rem",
                        height: "2rem",
                      }}
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                    <Typography textAlign="center">Username</Typography>
                  </Box>
                  <Divider sx={{ mx: "0.5rem", mb: "0.5rem" }} />

                  {settings.map((setting, index, settings) => {
                    if (index + 1 !== settings.length) {
                      return (
                        <MenuItem
                          sx={{ minWidth: "150px" }}
                          key={index}
                          onClick={() => handleClickSettingItem(setting.url)}
                        >
                          <Typography textAlign="center">
                            {setting.name}
                          </Typography>
                        </MenuItem>
                      );
                    } else
                      return (
                        <Box key={index}>
                          <MenuItem
                            sx={{ minWidth: "150px" }}
                            onClick={() => handleClickSettingItem(setting.url)}
                          >
                            <Typography textAlign="center" color={"red"}>
                              {setting.name}
                            </Typography>
                          </MenuItem>
                        </Box>
                      );
                  })}
                </Menu>
              </Box>
            </Box>
          ) : (
            <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <Button
                sx={{
                  borderRadius: "1.5rem",
                  color: "black",
                  height: "2rem",
                }}
                variant="text"
                color="primary"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                sx={{
                  borderRadius: "1.5rem",
                  color: "white",
                  height: "2rem",
                }}
                variant="contained"
                color="primary"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </Button>
            </Box>
          )}

          <Modal open={openModal} onClose={() => setOpenModal(false)}>
            <Box
              sx={{
                position: "absolute" as "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "white",
                border: "none",
                boxShadow: 24,
                pt: 2,
                px: 4,
                pb: 3,
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <h2 style={{ flexGrow: 1 }} id="modal-title">
                  LOGOUT
                </h2>
                <IconButton onClick={() => setOpenModal(false)}>
                  <CloseIcon />
                </IconButton>
              </div>
              <p style={{ marginBlock: "2rem" }} id="modal-description">
                Are you Logging out?
              </p>
              <Button
                sx={{ width: "100%" }}
                variant="contained"
                color="error"
                onClick={handleLogout}
              >
                YES, I AM!
              </Button>
            </Box>
          </Modal>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
