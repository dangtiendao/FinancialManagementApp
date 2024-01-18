import { DxTextBox } from "devextreme-vue";
import TextBox from "./TextBox.vue";
import { ValueControlChangeInfo } from "../field";
interface TextBoxConfig extends DxTextBox {

  onValueControlChange?: (e: ValueControlChangeInfo) => any;
}
// export default TextBox;
export { type TextBoxConfig, TextBox }