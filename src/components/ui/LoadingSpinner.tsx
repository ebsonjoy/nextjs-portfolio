export default function LoadingSpinner() {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary border-t-2 border-primary/20"></div>
      </div>
    )
  }