import Container from "../components/Container";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import ProductContainer from "../components/productsFetcher/ProductContainer";


export default function Home() {
    return (
        <div className="p-8">
            <Container>
                <div>
                    <HomeBanner />
                </div>
                <div >
                    <ProductContainer />
                </div>
            </Container>
        </div>
    )
}