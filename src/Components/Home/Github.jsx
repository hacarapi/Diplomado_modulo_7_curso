import githubLogo from '../../assets/GitHub.svg';

const Logo = () => {
    return (
        <div>
            <a href="https://github.com/hacarapi/Diplomado_modulo_7_curso" target="_blank">
            <img src={githubLogo} className="logo GitHub" alt="GitHub logo" />
            </a>
        </div>
    );
};

export default Logo;