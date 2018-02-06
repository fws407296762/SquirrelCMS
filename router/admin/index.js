/**
 * Created by fws on 2018/1/21.
 */
import home from "./home";
import content from "./content";

export default app => {
    app.use("/",home);
    app.use("/content",content);
}