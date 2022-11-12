import { InMemoryStore } from "../../classes/InMemoryStore";
import { createNumericInput } from "../../utils/UI/EA/createNumericInput";
import { createToggleInput } from "../../utils/UI/EA/createToggleInput";

export const SearchSettingView = () => {
  const wrapperDiv = document.createElement("div");
  wrapperDiv.classList.add("buyer-settings-wrapper", "search-settings-view");

  const store = InMemoryStore.getInstance();

  const searchSetting = store.get("search-setting");

  const randomBuyPrice = createNumericInput(
    (value) => {
      searchSetting.randomMinBuy = value || 0;
      store.set("search-setting", searchSetting);
    },
    "Random Min Buy Price",
    searchSetting.randomMinBuy || 300,
    "buyer-settings-field"
  );

  const useRandomToggle = createToggleInput(
    "Use Random Min Buy",
    (toggled) => {
      searchSetting.useRandomMinBuy = toggled;
      store.set("search-setting", searchSetting);
    },
    searchSetting.useRandomMinBuy,
    "buyer-settings-field"
  );

  const runForeGroundToggle = createToggleInput(
    "Run in Foreground",
    (toggled) => {
      searchSetting.runForeGround = toggled;
      store.set("search-setting", searchSetting);
    },
    searchSetting.runForeGround,
    "buyer-settings-field"
  );

  wrapperDiv.append(runForeGroundToggle);
  wrapperDiv.append(randomBuyPrice);
  wrapperDiv.append(useRandomToggle);

  return wrapperDiv;
};
