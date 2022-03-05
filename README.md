<img src="./logo.png" width="120" alt="CodeCatch Icons">

# [CodeCatch Icons](https://github.com/codecatchorg/codecatch-icons)

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/codecatch-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/codecatch-icons

CodeCatch Icons is a React-based icon library intended for all CodeCatch React projects.

## Installation

```bash
yarn add codecatch-icons
# or
npm install codecatch-icons
```

example usage

```jsx
import { SunIcon } from "codecatch-icons";
const Component = () => {
  return (
    <h1>
      Don't stare directly at the <SunIcon />
    </h1>
  );
};
```

## Icons

|                                     AccountIcon                                      |                                   CheckIcon                                    |                                       ChecklistIcon                                        |                                          ChevronDownIcon                                          |                                          ChevronLeftIcon                                          |                                           ChevronRightIcon                                           |                                   CloseIcon                                    |                                       CopyCodeIcon                                       |                                       CopyLinkIcon                                       |
| :----------------------------------------------------------------------------------: | :----------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: |
| <img src="./raw/account.svg" alt="Account Icon" title="<AccountIcon />" height="24"> | <img src="./raw/check.svg" alt="Check Icon" title="<CheckIcon />" height="24"> | <img src="./raw/checklist.svg" alt="Checklist Icon" title="<ChecklistIcon />" height="24"> | <img src="./raw/chevronDown.svg" alt="Chevron Down Icon" title="<ChevronDownIcon />" height="24"> | <img src="./raw/chevronLeft.svg" alt="Chevron Left Icon" title="<ChevronLeftIcon />" height="24"> | <img src="./raw/chevronRight.svg" alt="Chevron Right Icon" title="<ChevronRightIcon />" height="24"> | <img src="./raw/close.svg" alt="Close Icon" title="<CloseIcon />" height="24"> | <img src="./raw/copyCode.svg" alt="Copy Code Icon" title="<CopyCodeIcon />" height="24"> | <img src="./raw/copyLink.svg" alt="Copy Link Icon" title="<CopyLinkIcon />" height="24"> |

|                                    DeleteIcon                                     |                                  EditIcon                                   |                                 EyeIcon                                  |                                     EyeOffIcon                                     |                                      FacebookIcon                                       |                                           FacebookFillIcon                                           |                                    FilterIcon                                     |                                    GitHubIcon                                     |                                         GitHubFillIcon                                         |
| :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------: | :----------------------------------------------------------------------: | :--------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: |
| <img src="./raw/delete.svg" alt="Delete Icon" title="<DeleteIcon />" height="24"> | <img src="./raw/edit.svg" alt="Edit Icon" title="<EditIcon />" height="24"> | <img src="./raw/eye.svg" alt="Eye Icon" title="<EyeIcon />" height="24"> | <img src="./raw/eyeOff.svg" alt="Eye Off Icon" title="<EyeOffIcon />" height="24"> | <img src="./raw/facebook.svg" alt="Facebook Icon" title="<FacebookIcon />" height="24"> | <img src="./raw/facebookFill.svg" alt="Facebook Fill Icon" title="<FacebookFillIcon />" height="24"> | <img src="./raw/filter.svg" alt="Filter Icon" title="<FilterIcon />" height="24"> | <img src="./raw/gitHub.svg" alt="GitHub Icon" title="<GitHubIcon />" height="24"> | <img src="./raw/gitHubFill.svg" alt="GitHub Fill Icon" title="<GitHubFillIcon />" height="24"> |

|                                     GoBackIcon                                     |                                    GoogleIcon                                     |                                         GoogleFillIcon                                         |                                  InfoIcon                                   |                                   LoginIcon                                    |                                    LogoutIcon                                     |                                  MenuIcon                                   |                                  MoonIcon                                   |                                  MoreIcon                                   |
| :--------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------: | :----------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------: | :-------------------------------------------------------------------------: | :-------------------------------------------------------------------------: |
| <img src="./raw/goBack.svg" alt="Go Back Icon" title="<GoBackIcon />" height="24"> | <img src="./raw/google.svg" alt="Google Icon" title="<GoogleIcon />" height="24"> | <img src="./raw/googleFill.svg" alt="Google Fill Icon" title="<GoogleFillIcon />" height="24"> | <img src="./raw/info.svg" alt="Info Icon" title="<InfoIcon />" height="24"> | <img src="./raw/login.svg" alt="Login Icon" title="<LoginIcon />" height="24"> | <img src="./raw/logout.svg" alt="Logout Icon" title="<LogoutIcon />" height="24"> | <img src="./raw/menu.svg" alt="Menu Icon" title="<MenuIcon />" height="24"> | <img src="./raw/moon.svg" alt="Moon Icon" title="<MoonIcon />" height="24"> | <img src="./raw/more.svg" alt="More Icon" title="<MoreIcon />" height="24"> |

|                                     PaletteIcon                                      |                                     ProfileIcon                                      |                                       ReCaptchaIcon                                        |                                  SaveIcon                                   |                                    SearchIcon                                     |                                      SettingsIcon                                       |                                     SignUpIcon                                     |                                 SunIcon                                  |                                    UploadIcon                                     |
| :----------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: | :----------------------------------------------------------------------: | :-------------------------------------------------------------------------------: |
| <img src="./raw/palette.svg" alt="Palette Icon" title="<PaletteIcon />" height="24"> | <img src="./raw/profile.svg" alt="Profile Icon" title="<ProfileIcon />" height="24"> | <img src="./raw/reCaptcha.svg" alt="ReCaptcha Icon" title="<ReCaptchaIcon />" height="24"> | <img src="./raw/save.svg" alt="Save Icon" title="<SaveIcon />" height="24"> | <img src="./raw/search.svg" alt="Search Icon" title="<SearchIcon />" height="24"> | <img src="./raw/settings.svg" alt="Settings Icon" title="<SettingsIcon />" height="24"> | <img src="./raw/signUp.svg" alt="Sign Up Icon" title="<SignUpIcon />" height="24"> | <img src="./raw/sun.svg" alt="Sun Icon" title="<SunIcon />" height="24"> | <img src="./raw/upload.svg" alt="Upload Icon" title="<UploadIcon />" height="24"> |

## Contributing

1. Run `git clone https://github.com/codecatchorg/codecatch-icons.git`

2. Run `yarn` to install the dependencies

3. Create a new branch off master

4. Add the desired svg file to the `./raw` directory

5. Run `yarn build`

6. Run `git add .`

7. Commit your changes according to [semantic-release](https://github.com/semantic-release/semantic-release#how-does-it-work) requirements

8. Run `git push`
