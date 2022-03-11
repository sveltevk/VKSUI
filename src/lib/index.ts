import './styles/constants.css';
import './styles/animations.css';
import './styles/common.css';
import './fonts/fonts.css';
import './styles/bright_light.css';
import './styles/space_gray.css';
import './styles/vkcom_light.css';
import './styles/vkcom_dark.css';
import '@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css';
import '@vkontakte/vkui-tokens/themes/vkBaseDark/cssVars/declarations/onlyVariablesLocal.css';
import '@vkontakte/vkui-tokens/themes/vkIOS/cssVars/declarations/onlyVariablesLocal.css';
import '@vkontakte/vkui-tokens/themes/vkIOSDark/cssVars/declarations/onlyVariablesLocal.css';
import '@vkontakte/vkui-tokens/themes/vkCom/cssVars/declarations/onlyVariablesLocal.css';
import '@vkontakte/vkui-tokens/themes/vkComDark/cssVars/declarations/onlyVariablesLocal.css';

/**
 * Layout
 */
export { default as AppRoot } from './components/Layout/AppRoot/AppRoot.svelte';
export { default as SplitLayout } from './components/Layout/SplitLayout/SplitLayout.svelte';
export { default as SplitCol } from './components/Layout/SplitCol/SplitCol.svelte';
export { default as Panel } from './components/Layout/Panel/Panel.svelte';
export { default as PanelHeader } from './components/Layout/PanelHeader/PanelHeader.svelte';
export { default as PanelHeaderButton } from './components/Layout/PanelHeaderButton/PanelHeaderButton.svelte';
export { default as PanelHeaderBack } from './components/Layout/PanelHeaderBack/PanelHeaderBack.svelte';
export { default as PanelHeaderClose } from './components/Layout/PanelHeaderClose/PanelHeaderClose.svelte';
export { default as PanelHeaderSubmit } from './components/Layout/PanelHeaderSubmit/PanelHeaderSubmit.svelte';
export { default as PanelHeaderEdit } from './components/Layout/PanelHeaderEdit/PanelHeaderEdit.svelte';
export { default as FixedLayout } from './components/Layout/FixedLayout/FixedLayout.svelte';
export { default as HorizontalScroll } from './components/Layout/HorizontalScroll/HorizontalScroll.svelte';
/**
 * Advertisement
 */
export { default as PromoBanner } from './components/Advertisement/PromoBanner/PromoBanner.svelte';

/**
 * Service
 */
export { default as AdaptivityProvider } from './components/Service/AdaptivityProvider/AdaptivityProvider.svelte';
export { default as ConfigProvider } from './components/Service/ConfigProvider/ConfigProvider.svelte';
export { default as SSRWrapper } from './components/Service/SSRWrapper/SSRWrapper.svelte';
export { default as Tappable } from './components/Service/Tappable/Tappable.svelte';
export { default as Touch } from './components/Service/Touch/Touch.svelte';

/**
 * Typography
 */
export { default as Headline } from './components/Typography/Headline/Headline.svelte';
export { default as Text } from './components/Typography/Text/Text.svelte';
export { default as Subhead } from './components/Typography/Subhead/Subhead.svelte';
export { default as Title } from './components/Typography/Title/Title.svelte';
export { default as Caption } from './components/Typography/Caption/Caption.svelte';

/**
 * Blocks
 */
export { default as Badge } from './components/Blocks/Badge/Badge.svelte';
export { default as IconButton } from './components/Blocks/IconButton/IconButton.svelte';
export { default as MiniInfoCell } from './components/Blocks/MiniInfoCell/MiniInfoCell.svelte';
export { default as Cell } from './components/Blocks/Cell/Cell.svelte';
export { default as Switch } from './components/Blocks/Switch/Switch.svelte';
export { default as Search } from './components/Blocks/Search/Search.svelte';
export { default as List } from './components/Blocks/List/List.svelte';
export { default as Header } from './components/Blocks/Header/Header.svelte';
export { default as Footer } from './components/Blocks/Footer/Footer.svelte';
export { default as Tabs } from './components/Blocks/Tabs/Tabs.svelte';
export { default as Avatar } from './components/Blocks/Avatar/Avatar.svelte';
export { default as GridAvatar } from './components/Blocks/GridAvatar/GridAvatar.svelte';
export { default as InitialsAvatar } from './components/Blocks/InitialsAvatar/InitialsAvatar.svelte';
export { default as CardGrid } from './components/Blocks/CardGrid/CardGrid.svelte';
export { default as CardScroll } from './components/Blocks/CardScroll/CardScroll.svelte';
export { default as Card } from './components/Blocks/Card/Card.svelte';
export { default as Progress } from './components/Blocks/Progress/Progress.svelte';
export { default as Spinner } from './components/Blocks/Spinner/Spinner.svelte';
export { default as Separator } from './components/Blocks/Separator/Separator.svelte';
export { default as RichCell } from './components/Blocks/RichCell/RichCell.svelte';
export { default as CellButton } from './components/Blocks/CellButton/CellButton.svelte';
export { default as Placeholder } from './components/Blocks/Placeholder/Placeholder.svelte';
export { default as Group } from './components/Blocks/Group/Group.svelte';
export { default as SimpleCell } from './components/Blocks/SimpleCell/SimpleCell.svelte';
export { default as Link } from './components/Blocks/Link/Link.svelte';
export { default as UsersStack } from './components/Blocks/UsersStack/UsersStack.svelte';
export { default as Div } from './components/Blocks/Div/Div.svelte';
export { default as Gradient } from './components/Blocks/Gradient/Gradient.svelte';
export { default as Counter } from './components/Blocks/Counter/Counter.svelte';
export { default as Banner } from './components/Blocks/Banner/Banner.svelte';
export { default as InfoRow } from './components/Blocks/InfoRow/InfoRow.svelte';
export { default as TabsItem } from './components/Blocks/TabsItem/TabsItem.svelte';
export { default as Button } from './components/Blocks/Button/Button.svelte';
export { default as PanelSpinner } from './components/Blocks/PanelSpinner/PanelSpinner.svelte';

/**
 * Forms
 */
export { default as Checkbox } from './components/Forms/Checkbox/Checkbox.svelte';
export { default as FormItem } from './components/Forms/FormItem/FormItem.svelte';
export { default as FormLayoutGroup } from './components/Forms/FormLayoutGroup/FormLayoutGroup.svelte';
export { default as FormLayout } from './components/Forms/FormLayout/FormLayout.svelte';
export { default as FormField } from './components/Forms/FormField/FormField.svelte';
export { default as FormStatus } from './components/Forms/FormStatus/FormStatus.svelte';
export { default as Input } from './components/Forms/Input/Input.svelte';
export { default as File } from './components/Forms/File/File.svelte';

/**
 * Hooks
 */
export { usePlatform } from './hooks/usePlatform';
export { useAdaptivity } from './hooks/useAdaptivity';

/**
 * Utils
 */
export { platform, ANDROID, IOS, VKCOM, Platform } from './lib/platform';
export { ViewWidth, ViewHeight, SizeType } from './lib/adaptivity';
export { calcInitialsAvatarColor } from './helpers/avatar';

/**
 * Types
 */
export type { AlignType, HasPlatform, HasInsets } from './types';
export type { PlatformType } from './lib/platform';
