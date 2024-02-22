import Image from "next/image"
import kiitLogo from "../../assests/KIIT Logo-1kl 1.png"
import kissLogo from "../../assests/image 9.png"

export default function AboutKiiT() {
    return (
        <div className="p-28 flex gap-20"  style={{
            background:
              "linear-gradient(180deg, rgba(80,78,123,1) 0%, rgba(80,78,123,0.5) 30%, rgba(80,78,123,0.5) 70%, rgba(80,78,123,1) 100%)",
          }}>
            <div className="text-justify">
                <div className="h-20 flex justify-center">
                    <Image src={kiitLogo} alt="kiit-logo" height={80} />
                </div>
                <div className="text-3xl font-bold flex justify-center py-5">ABOUT KIIT</div>
                <div className="text-lg pt-8">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                    professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                    literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                    of "de Finibus Bonorum  Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
                    Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk
                    of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original
                    form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular
                    belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-
                </div>
            </div>
            <div className="text-justify ">
                <div className="h-20 flex justify-center">
                    <Image src={kissLogo} alt="kiss-logo" height={80} />
                </div>
                <div className="text-3xl font-bold flex justify-center py-5">ABOUT KISS</div>
                <div className="text-lg pt-8">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                    professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                    literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
                    of "de Finibus Bonorum  Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
                    Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk
                    of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original
                    form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular
                    belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-
                </div>
            </div>
        </div>
    )
}
