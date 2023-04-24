import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-4 w-full mt-32">
            <div className="container mx-auto text-center ">
                <p className="text-gray-400">
                    &copy; {new Date().getFullYear()} Nahuel Benitez - Todos los derechos reservados
                </p>
                <hr className="mt-3" />
                <a
                    href="https://github.com/NahuelBenitez/proyectomuni-yb"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center text-gray-400 hover:text-white mt-2"
                >
                    <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub"
                        className="h-6 mr-2"
                    />
                    <span>Visita el repositorio en GitHub</span>
                </a>


            </div>
        </footer>
    );
};

export default Footer;
