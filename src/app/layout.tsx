import type { Metadata } from "next";
import { Handjet } from "next/font/google";
import "@/style/globals.scss";
import Wrapper from "@/components/Wrapper/Wrapper";
import Header from "@/components/Header/Header";

const handjet = Handjet({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "delicious pizza",
	description:
		"Delicious pizza - это идеальное сочетание вкусов и текстур, с тонкой и хрустящей основой, которая придает начинке блеск. Соус получается насыщенным и ароматным, с нужной долей кислинки, в то время как сыр получается плавленым и эластичным. Начинки отбираются вручную из-за их свежести и аромата и умело сочетаются для создания гармоничного баланса вкусов. Независимо от того, выбираете ли вы традиционные пепперони или предпочитаете что-то более авантюрное, в меню Delicious pizza есть блюда, которые порадуют ваши вкусовые рецепторы. Сочетайте его с холодным пивом или бокалом вина для идеального ужина и не забудьте оставить место для десерта!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={handjet.className}>
				<Wrapper>
					{children}
				</Wrapper>
			</body>
		</html>
	);
}
