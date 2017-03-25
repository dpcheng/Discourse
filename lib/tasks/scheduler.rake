namespace :reset_database do
  desc "Destroy all table entries."
  task :all => :environment do
    ActiveRecord::Base.connection.tables.each do |table|
      if table != 'schema_migrations'
        table.singularize.camelize.constantize.destroy_all
      end
      # Use this if you want to use the normal seeds:
      Rails.application.load_seed
      
      # Use this if you want to run another rake task:
      # Rake::Task["foo:bar"].invoke
    end
  end
end
