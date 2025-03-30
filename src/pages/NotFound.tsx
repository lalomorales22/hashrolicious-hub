
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Terminal, AlertTriangle, RefreshCw } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-black terminal-lines crt scanline">
      <div className="cyber-card p-8 max-w-md w-full">
        <div className="text-center relative">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <AlertTriangle className="text-cyber-red h-10 w-10" />
            <h1 className="text-6xl font-bold text-cyber-red font-mono">404</h1>
          </div>
          
          <div className="border border-cyber-red/30 bg-cyber-darker p-4 mb-8">
            <p className="text-xl text-white mb-4 font-mono">ACCESS_DENIED</p>
            <div className="text-cyber-red/70 font-mono text-sm mb-6 text-left bg-cyber-black p-3">
              <p>{'>'} ERROR: FILE_NOT_FOUND</p>
              <p>{'>'} PATH: {location.pathname}</p>
              <p>{'>'} CONNECTION_TERMINATED</p>
              <p>{'>'} <span className="animate-blink">_</span></p>
            </div>
          </div>
          
          <Link to="/" className="cyber-button inline-flex items-center">
            <Terminal className="mr-2 h-4 w-4" /> 
            <span>RETURN_TO_HOME</span>
          </Link>
          
          <div className="ascii-art mt-8 text-center text-white/50 font-mono">
            <pre className="hidden md:block text-xs leading-none tracking-tighter">
{`  _____   ____  _  _    _____ ____  ____   ___  ____ 
 | ____| |  _ \\| || |  | ____|  _ \\|  _ \\ / _ \\|  _ \\
 |  _|   | |_) | || |_ |  _| | |_) | |_) | | | | |_) |
 | |___  |  _ <|__   _|| |___|  _ <|  _ <| |_| |  _ < 
 |_____| |_| \\_\\  |_|  |_____|_| \\_\\_| \\_\\\\___/|_| \\_\\
                                                      `}
            </pre>
            <div className="md:hidden text-sm">ERROR 404</div>
          </div>
          
          <div className="mt-6">
            <button 
              onClick={() => window.location.reload()} 
              className="text-cyber-cyan hover:text-cyber-neon text-sm flex items-center mx-auto"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              <span className="font-mono">RETRY_CONNECTION</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
