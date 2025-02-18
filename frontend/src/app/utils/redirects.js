import { redirect } from "next/navigation";

function handleAuthBtn(e) {
  e.preventDefault();

  let btn = e.target;

  switch (btn.id) {
    case "sign_in_redirect": {
      redirect("/login");
    }
    case "register_redirect": {
      redirect("/signup");
    }
    case "forgot_password": {
      redirect("/forgot-password");
    }
    case "return_login": {
      redirect("/login");
    }
  }
}

function handleProfileBtn(e) {
  e.preventDefault();

  let btn = e.target;
  switch (btn.id) {
    case "go_home": {
      redirect("/");
    }
  }
}

export default { handleAuthBtn, handleProfileBtn };
