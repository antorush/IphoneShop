import { Link } from "react-router-dom";
import Container from "../../features/Container/Container";

interface ICategoriesProps {
    categories: TCategories[],
}

const Categories:React.FC<ICategoriesProps> = ({categories}) => {
    return ( <section className="block relative w-full text-center py-[80px]">
        <Container maxWidth="1600" padding="30">
            <h2 className="mb-8 w-full text-left font-medium text-2xl leading-8 tracking-wider">Browse By Category</h2>
            <ul className="flex justify-between items-center w-full">{categories?.map(category => 
                <Link to={`/category/${category.href}`} className="flex justify-center group items-center flex-col rounded-2xl w-[160px] h-[128px] bg-catergoryBg transition-all ease-in-out duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-black/50 hover:rounded-[20%_20%_0_0/80%_60%_0_0]" key={category.id}>
                    <li className="flex justify-center items-center flex-col gap-2">
                       <img src={category.icon} alt="" className="transition-all ease-in-out duration-150 delay-75 group-hover:-translate-y-2.5" />
                       <p className="font-medium leading-6 text-sizePrimary transition-all ease-in-out duration-150 delay-100 group-hover:translate-y-2">{category.name}</p>
                    </li>
                </Link>
            )}</ul>
        </Container>
    </section> );
}
 
export default Categories;