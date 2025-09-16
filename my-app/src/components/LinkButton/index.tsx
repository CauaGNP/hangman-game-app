import { Link } from "expo-router";
import { styles } from "./styles"

type Props = {
    title: string,
    path: string,
}

export default function LinkButton({title, path} : Props){
    return <Link href={path} style={styles.link}>{title}</Link>
}